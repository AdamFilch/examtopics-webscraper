from flask import Flask, jsonify, request
import subprocess
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/scrape', methods=['POST'])
def run_script():
    try:
        
        data = request.json
        scrape_details = {
            "exam_name": data.get('exam_name'),
            "provider": data.get('provider'),
            "scrape_method": data.get('scrape_method', '')  # Default to empty if not provided
        }
        

        # Pass scrape_details to the Python script as a JSON string
        result = subprocess.run(
            ['python', 'main.py', json.dumps(scrape_details)],
            capture_output=True,
            text=True
        )
        # Run the Python script and capture output
        return jsonify({'output': result.stdout, 'error': result.stderr}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)