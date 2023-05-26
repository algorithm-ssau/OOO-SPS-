#!/bin/bash

sleep 10

mongoimport --host mongo_db --db specpromstroy --collection machinery_info --type json --file /machinery_info.json --jsonArray
