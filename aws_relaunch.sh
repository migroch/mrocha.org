#! /bin/bash

aws ecs list-tasks --cluster mrocha-ecs-cluster0 --profile=mrocha

aws ecs describe-tasks --cluster mrocha-ecs-cluster0 --tasks arn:aws:ecs:us-west-2:705465192539:task/0020be54-7442-49da-9abd-8395785883bc --profile=mrocha

aws ecs stop-task --cluster mrocha-ecs-cluster0 --task arn:aws:ecs:us-west-2:705465192539:task/0020be54-7442-49da-9abd-8395785883bc --profile=mrocha

aws ecs run-task --cluster mrocha-ecs-cluster0 --task-definition arn:aws:ecs:us-west-2:705465192539:task-definition/web0:16 --launch-type EC2 --profile=mrocha
