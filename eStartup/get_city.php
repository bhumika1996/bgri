<?php
    $id = $_GET['state_id'];
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db_name = 'bgri';
    $db=mysqli_connect($host, $username, $password, $db_name);
    $result = mysqli_query($db,"SELECT*from cities where state_id=$id");
    $json_array = array();
    while ($row = mysqli_fetch_assoc($result))
    {
        $json_array[] = $row;
    }
    print(json_encode($json_array));
    mysqli_close($db);
?>