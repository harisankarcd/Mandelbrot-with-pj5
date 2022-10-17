# Python3 program to print sign wave pattern.

def printSinWave(wave_height, wave_length):

	# inner space and outer space.
	Is = 1
	os = 2

	# for loop for height of wave
	for i in range(1, wave_height + 1):

		# for loop for wave length
		for j in range(1, wave_length + 1):

			# intermediate spaces
			for k in range(1, os + 1):
				print(end = " ")
			
			# put any symbol
			print("0", end = "")

			for k in range(1, Is + 1):
				print(end = " ")		

			# put any symbol
			print("0", end = "")

			for k in range(1, os + 1):
				print(end = " ")
			
			print(end = " ")
		
		# set a value of os to 1 if i+1 Is not
		# equal to wave height or 0 otherwise
		if (i + 1 != wave_height):
			os = 1
		else:
			os = 0
			
		# set value of Is to 3 if i+1 Is not
		# equal to wave height or 5 otherwise
		if (i + 1 != wave_height):
			Is = 3
		else:
			Is = 5
		print()

# Driver code
wave_height, wave_length = 5, 10
printSinWave(wave_height, wave_length)

# This code is contributed by
# Mohit kumar 29
