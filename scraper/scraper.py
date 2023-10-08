from datetime import datetime

# Get the current time
current_time = datetime.now()

# Format the time as a string
formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")

# Specify the file path
file_path = "scraper/progress.txt"

isNeedsClear = False
with open(file_path, 'r+') as file:
    lines = file.readlines()
    if len(lines) > 10:
        isNeedsClear = True

if isNeedsClear:
    with open(file_path, 'w') as file:
        pass  # This does nothing, but the file is now empty
else:
    # Write the formatted time to the file
    with open(file_path, "a") as file:
        file.write(formatted_time)
        file.write("\n")
