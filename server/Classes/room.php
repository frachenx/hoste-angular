<?php
require_once("database.php");

class Room extends database{
    public $id,$roomNumber,$seater,$fee,$postingDate;

    public static function addRoom($roomNumber_,$seater_,$fee_){
        $instance = new self();
        $SQL = "INSERT INTO ROOMS (room_num,room_seater,room_fee) VALUES (?,?,?)";
        $conn = $instance->connect();
        $stmt = $conn->prepare($SQL);
        if (!$stmt){
            echo ("QueryError" . mysqli_error($conn));
            return false;
        }else{
            $stmt->bind_param("sss",$roomNumber_,$seater_,$fee_);
            if ($stmt->execute()){
                //INSERTED SUCCESFULLY
                return $instance;
            }else{
                echo ("QueryError" . mysqli_error($conn));
                return false;
            }
        }
    }
    
    public static function getRooms(){
        $instance = new self();
        $SQL ="SELECT * FROM ROOMS";
        $conn = $instance->connect();
        $stmt = $conn->prepare($SQL);
        if (!$stmt){
            return false;
        }else{
            if(!$stmt->execute()){
                return false;
            }else{
                $result = $stmt->get_result();
                if ($result->num_rows > 0){
                    $json=array();
                    while ($row = $result->fetch_array()){
                        $json[]=array(
                            "id"=>$row['room_id'],
                            "roomNumber"=>$row['room_num'],
                            "seater"=>$row['room_seater'],
                            "fee"=>$row['room_fee'],
                            "postingDate"=>$row['room_post_date'],
                        );
                    }
                    echo json_encode($json);
                }else{return false;}
            }
        }
    }

    public static function delete($id){
        $instance = new self();
        $SQL = "DELETE FROM ROOMS WHERE room_id=?";
        $conn = $instance->connect();
        $stmt = $conn->prepare($SQL);
        $stmt->bind_param("s",$id);
        if($stmt->execute()){
            return true;
        }else{
           return false;
        }
    }

}