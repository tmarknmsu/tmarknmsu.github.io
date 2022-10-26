import json
# import the AWS SDK (for Python the package name is boto3)
import boto3
from boto3.dynamodb.conditions import Key, Attr
# import two packages to help us with dates and date formatting
from time import gmtime, strftime

# create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# use the DynamoDB object to select our table
table = dynamodb.Table('User_Login_Info_Table')
primary_column_name = 'UserID'
primary_key = 1
columns = ["Last_Login","Password","Username"]

# this just gets the time of the function to store
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

    
def lambda_handler(event, context):
    pyusername = event['username']
    pypassword = event['password']
    response = table.scan(FilterExpression = pyusername , ProjectionExpression='Username')
    print(response)
    # TODO implement

    # write name and time to the DynamoDB table using the object we instantiated and save response in a variable
    # response = table.scan(
    #     Item={
    #         'Username',
    #         'Password'
    #         })
    
    
    return {
        
        'statusCode': 200,
        'body': json.dumps('username is - ' + pyusername + ' password is - ' + pypassword)
    }
# just an example below
def scan_db(table, scan_kwargs=None):
    """
    Get all records of the dynamodb table where the FilterExpression holds true
    :param scan_kwargs: Used to pass filter conditions, know more about kwargs- geeksforgeeks.org/args-kwargs-python/
    :type scan_kwargs: dict
    :param table: dynamodb table name
    :type table: str
    :return: list of records
    :rtype: dict
    """
    if scan_kwargs is None:
        scan_kwargs = {}
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table)

    complete = False
    records = []
    while not complete:
        try:
            response = table.scan(**scan_kwargs)
        except botocore.exceptions.ClientError as error:
            raise Exception('Error quering DB: {}'.format(error))

        records.extend(response.get('Items', []))
        next_key = response.get('LastEvaluatedKey')
        scan_kwargs['ExclusiveStartKey'] = next_key

        complete = True if next_key is None else False
    return records
# %%
