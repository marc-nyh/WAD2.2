<?php


    // Read JSON data from a file
    $jsonData = file_get_contents('inventory.json');

    // Decode the JSON data into a PHP array
    $dataArray = json_decode($jsonData, true); // The second argument 'true' decodes it into an associative array

    // Initialize an empty PHP array
    $phpArray = [];

    // Push the decoded JSON data into the PHP array
    $phpArray[] = $dataArray;
    

    $query = $_GET["query"]; //key is this async get req...
    $hint = "";
    // lookup all hints from array if $query is not "" 
    if($query != "") {
        $query = strtolower($query);
        $len = strlen($query);

        foreach ($dataArray as $key => $value) {
            foreach ($value as $key2 => $value2) {
                // echo ''. $key2 .''. $value2 .'';
                // echo "<br>";

                if (stristr($query, substr($value2, 0, $len ))) {
                    if ($hint == "") {
                        $hint = $value2;
                    } 
                    else {
                        $hint = $hint . ", $value2";
                    }
                }

            }
        }

        // foreach($names as $name) {
        //     // e.g. stristr('USER@EXAMPLE.com', 'e') --> ER@EXAMPLE.COM
        //     if (stristr($query, substr($name, 0, $len ))) {
        //         if ($hint == "") {
        //             $hint = $name;
        //         } 
        //         else {
        //             $hint = $hint . ", $name";
        //         }
        //     }
        // }
    }
    // return the hint if found or "no suggestion" if no hint found 
    echo $hint== "" ? "no suggestion" : $hint; // -> text






?>