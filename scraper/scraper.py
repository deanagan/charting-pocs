from datetime import datetime

# Get the current time
current_time = datetime.now()

# Format the time as a string
formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")

# Specify the file path
file_path = "scraper/progress.txt"

# Write the formatted time to the file
with open(file_path, "w") as file:
    file.write(formatted_time)

print("Time written to", file_path)
