from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///My_Database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

connection = mysql.connector.connect(
    host="localhost",
    user="root_1",
    password="admin",
    database="my_database"
)

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(100), nullable=False)

class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    bike_type = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(20), nullable=False)

class Rental(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    bike_id = db.Column(db.Integer, db.ForeignKey('bike.id'), nullable=False)
    rental_date = db.Column(db.Date, nullable=False)
    return_date = db.Column(db.Date, nullable=False)
    total_cost = db.Column(db.Float, nullable=False)
    customer = db.relationship('Customer', backref=db.backref('rentals', lazy=True))
    bike = db.relationship('Bike', backref=db.backref('rentals', lazy=True))

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    designation = db.Column(db.String(50), nullable=False)

class CustomerCreate(Resource):
    def post(self):
        data = request.get_json()
        new_customer = Customer(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            phone_number=data['phone_number'],
            address=data['address']
        )
        db.session.add(new_customer)
        db.session.commit()
        return jsonify(new_customer.id)

@app.route('/customers', methods=['GET'])
def get_customers():
    try:
        cursor = connection.cursor()
        sql = "SELECT * FROM Customers"
        cursor.execute(sql)
        result = cursor.fetchall()
        print("kunjesh")
        for row in result:
            print(row)
        # Return results as JSON
        response = jsonify(result)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        # Close connection to database
        connection.close()

@app.route('/GetRentals', methods=['GET'])
def getALLrentals():
    try:
        cursor = connection.cursor()
        sql = "SELECT * FROM Rentals"
        cursor.execute(sql)
        result = cursor.fetchall()
        # Return results as JSON
        response = jsonify(result)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        # Close connection to database
        connection.close()

@app.route('/FetchBikes', methods=['GET'])
def getALLBikes():
    try:
        cursor = connection.cursor()
        sql = "SELECT * FROM Bikes"
        cursor.execute(sql)
        result = cursor.fetchall()
        # Return results as JSON
        response = jsonify(result)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        # Close connection to database
        connection.close()

@app.route('/Employees', methods=['GET'])
def getALLEmployees():
    try:
        cursor = connection.cursor()
        sql = "SELECT * FROM Employees"
        cursor.execute(sql)
        result = cursor.fetchall()
        # Return results as JSON
        response = jsonify(result)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        # Close connection to database
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)
