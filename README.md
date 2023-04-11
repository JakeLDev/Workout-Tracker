# Workout-Tracker
Mobile App to help track your workout progress

Web App first?, turn into mobile app later?

## Features

User can create account, input information about themselves: Age, Weight, height, etc

#### Create Workout plan
   - Select/create a number of exercises, filtered by body part/region
   - estimates total time for workout based on past workouts, (other user data? record anonymised data for duration for exercises)

#### Start a workout
   - select an exercise, or create new one
        - if selecting existing one, or one done previously, show the last used weight and reps
   - record number of reps and weight (kg/lbs)
   - record time spent exercising (for cardio)
   - record rest time, or provide a timer to standardise rest time
Finish the workout, record total workout time, time spent in each exercise etc

#### View workout history:
   - view all workouts
   - view a specific workout
   - view a specific exercise
   - view a specific set

#### Record other information:
   - Daily Calories
   - Protein intake
   - Water intake
   - Sleep
   - Weight

Can track trends over time
draw graphs for weights, reps, calories, etc

Extra features:
   - Share workouts with friends
   - Take photos of page in workout book, and upload to app
   - Progress pictures storage? can remind you where you were a month ago etc
   - User selected colour themes (presets? or customizable?)


## Tech stack

Front End:
Flutter (Dart)
    Run via VSC (Ctrl + F5)

Back End:
Django (Python) + Firebase
    python manage.py runserver


### Potential Names:
    WorkoutTracker
    PumpTracker
    SweatStats
    WorkoutBuddy
    GymJot
    WorkoutNotebook
    LiftNotes
    GymNotes
