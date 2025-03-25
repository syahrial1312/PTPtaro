from flask import Flask, render_template, request, redirect, url_for, session, flash, send_from_directory

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Kunci untuk session dan flash message


# Route untuk halaman login
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Cek login
        if email == "syahrial1312" and password == "taro":
            session['user'] = email  # Simpan session
            flash("Login berhasil! Selamat datang, " + email, "success")
            return redirect(url_for('dashboard'))  # Redirect ke dashboard
        else:
            flash("Email atau password salah!", "error")  # Notifikasi error
            return redirect(url_for('login'))  # Kembali ke login

    return render_template('login.html')  # Menampilkan login saat GET request


# Route untuk menampilkan sidebar/dashboard
@app.route('/dashboard')
def dashboard():
    if 'user' not in session:  # Cek apakah user sudah login
        flash("Anda harus login terlebih dahulu!", "warning")
        return redirect(url_for('login'))

    return render_template('home.html', user=session['user'])


# Route untuk logout
@app.route('/logout')
def logout():
    session.pop('user', None)  # Hapus session
    flash("Anda telah logout!", "info")
    return redirect(url_for('login'))


@app.route('/historyPm')
def historyPM():
    return render_template('historyPM.html', users=session['user'])

@app.route('/planPm')
def planPM():
    return render_template('planPM.html',users=session['user'])

@app.route('/workOrder')
def workOrder():
    return render_template('workOrder.html', users=session['user'])

@app.route('/home')
def home():
    return render_template('homeAll.html', user=session['user'])

@app.rpute('/detailMesin')
def detailMesin():
    return render_template('detailMesin.html',users=session['user'])

@app.route('/setting')
def setting():
    return render_template('setting.html',users=session['user'])

@app.route('/profile')
def profile():
    return render_template('profile.html',users=session['user'])

# Route untuk favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static/images', 'favicon.ico', mimetype='image/vnd.microsoft.icon')


if __name__ == '__main__':
    app.run(debug=True)