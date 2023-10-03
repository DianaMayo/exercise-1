from flask import Flask, render_template, request, flash, redirect
import requests 

app = Flask(__name__)
app.config['SECRET_KEY'] = "chicken123"


currency_list = ["EUR","USD","JPY","BGN","CZK","DKK","GBP","HUF",
                "PLN","RON","SEK","CHF","ISK","NOK","TRY",
                "AUD","BRL","CAD","CNY","HKD","IDR","INR",
                "KRW","MXN","MYR","NZD","PHP","SGD","THB", 
                "ZAR"]


@app.route('/form/')
def show_form():
        return render_template('convert.html')
    

@app.route('/result', methods=["GET","POST"] )
def convert():
    from_base = request.form['base']
    symbols = request.form['symbols']
    amount = request.form['amount']
    submit = request.form['submit']
    
    if from_base not in currency_list:
        flash("Not a valid code", "error")
        return redirect('/form/')
    else:
        url = 'https://theforexapi.com/api/latest/?base=' + from_base
        response = requests.get(url)
        data = response.json() 
   
    if symbols not in currency_list: 
        flash("Not a valid code", "error")
        return redirect('/form/')
    else:
        rate = data['rates'][symbols]

    try:
        convert = float(amount) * float(rate)
        return render_template('result.html', convert=convert) 
    except Exception as e:
        
        flash("Not a valid amount", "error")
        return redirect('/form/')

  

    """ 
    
        
    if request.method is 'POST':
        return render_template('result.html', data=convert)
       
    else:
        flash("Not a valid amount", "error")
        return redirect('/form/')
        
   """
"""

 {% for msg in get_flashed_messages() %}
    <p>{{msg}}</p>
    {% endfor %}


flash("Not a valid amount.")


  if symbols in currency_list:

    else:
        flash("Not a valid code")
        return redirect('/form/')
"""
