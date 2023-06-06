#dependencies
# pip3  install Adafruit_Python_DHT
# pip3 install Flask
# pip3 install Flask-RESTful
# pip3 install Flask-Cors
try:
	from flask import Flask
	from flask_restful import Resource,Api
	from flask_restful import reqparse
	from flask import request
	from flask_cors import CORS
#	import adafruit_dht
	import random
	print("All modules loaded ")
except Exception as e:
	print("Error: {}".format(e))
app = Flask(__name__)

#api_v1_cors_config = {
#	"origin": ["http://localhost:5173"],
#	"methods": ["OPTIONS","GET","POST"]
#}

#CORS(app, resources={
#	r"/api/v1/": api_v1_cors_config
#})
CORS(app)

api = Api(app)
#pin = 7
#sensor = adafruit_dht.DHT11(board.D4)
class Sensors(object):
	def __init__(self):
		pass
	def get(self):
		#temperature = sensor.temperature
		#humidity = sensor.humidity
		#if humidity is not None and temperature is not None:
		return{
			'Temperature': random.randint(25, 30),
			'humidity': random.randint(85, 90)
		}
class Controller(Resource):
	def __init__(self):
		pass
	def get(self):
		helper = Sensors()
		return helper.get()
api.add_resource(Controller, "/api/v1/hello")
if __name__ == "__main__":
	app.run(host='0.0.0.0')
