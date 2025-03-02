// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
async function createLogin() {
  let alert = new Alert();
  alert.title = "@TOBI.HACK";
  alert.message = "Digite Seu Login:";
  alert.addTextField("Password");
  alert.addAction("Login");
  alert.addCancelAction("Cancelar");

  let response = await alert.present();
  let password = alert.textFieldValue(0).trim();

  if (password === "T") {
    let webView = new WebView();
    let html = createMenu();
    await webView.loadHTML(html);
    await webView.waitForLoad();
    await webView.present();
  } else {
    let errorAlert = new Alert();
    errorAlert.title = "Erro";
    errorAlert.message = "Senha incorreta!";
    errorAlert.addAction("OK");
    await errorAlert.present();
  }
}

function createMenu() {
  return `<!DOCTYPE html>
  <html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>SCRIPT BY @TOBI.HACK</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: black;
        color: white;
        font-family: 'Arial', sans-serif;
        text-align: center;
        height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 20px;
    }
    
    .container {
        width: 90%;
        max-width: 400px;
        background: linear-gradient(135deg, #002d13, #001a0b);
        padding: 20px;
        border: 4px solid #00cc44;
        box-shadow: 0 0 10px #00cc44;
        border-radius: 12px;
        overflow-y: auto;
        max-height: 90vh;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
        color: #00cc44;
        margin-bottom: 15px;
        text-transform: uppercase;
        text-shadow: 0 0 8px #00ff55;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        color: #00cc44;
        margin-bottom: 10px;
    }

    .option {
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 16px;
        font-weight: bold;
    }

    .option input {
        margin-right: 10px;
        transform: scale(1.2);
        accent-color: #00cc44;
    }

    .slider-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 8px 0;
    }

    .slider {
        flex: 1;
        accent-color: #00cc44;
        height: 4px;
        border-radius: 8px;
        box-shadow: 0 0 6px rgba(0, 204, 68, 0.8);
    }

    .dropdown {
        width: 100%;
        padding: 10px;
        background: #001a0b;
        border: 1px solid #00cc44;
        color: white;
        border-radius: 6px;
        margin: 8px 0;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
    }

    h4 {
        font-size: 16px;
        margin-top: 10px;
        color: #00cc44;
    }

    .radio-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 10px;
    }

    .radio-container label {
        font-size: 14px;
        font-weight: bold;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        transition: 0.3s;
        border: 2px solid #00cc44;
        cursor: pointer;
    }

    .radio-container input:checked + label {
        background: #00cc44;
        color: black;
        box-shadow: 0 0 8px #00cc44;
    }

    .button {
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #006622, #003311);
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 15px;
        box-shadow: 0 0 10px #00cc44;
        transition: 0.3s ease-in-out;
        font-size: 14px;
    }

    .button:hover {
        background: linear-gradient(135deg, #009933, #004d1a);
        box-shadow: 0 0 15px #00ff55;
        transform: scale(1.05);
    }
</style>
</head>
<body>
    <div class="container">
        <h2>AUXÍLIO DO TOBI</h2>  
        <h3>BY @TOBI.HACK</h3>
        
        <div class="option">
            <input type="checkbox" id="aimtrigger">
            <label for="aimtrigger">AimTrigger</label>
        </div>

        <div class="option">
            <input type="checkbox" id="aimbot">
            <label for="aimbot">Aimbot</label>
        </div>

        <div class="option">
            <input type="checkbox" id="aimneck">
            <label for="aimneck">Aimneck</label>
        </div>

        <div class="slider-container">
            <input type="range" id="fovRange" class="slider" min="1" max="10" value="5">
            <span id="fovValue">Fov 5</span>
        </div>

        <div class="slider-container">
            <input type="range" id="trickHeadRange" class="slider" min="1" max="100" value="50">
            <span id="trickHeadValue">Trick Head 50</span>
        </div>

        <select class="dropdown" id="auxilioType">
            <option>Auxilio Head</option>
            <option>Auxilio Sensi</option>
            <option>Auxilio Total</option>
        </select>
        
        <h4>Tipo de Auxílio:</h4>
        
        <div class="radio-container">
            <input type="checkbox" id="recuo">
            <label for="recuo">Auxílio Recuo</label>
            <input type="checkbox" id="scope">
            <label for="scope">Auxílio Scope</label>
        </div>

        <button class="button" id="injectButton" onclick="ativarFuncoes()">INJECT FREE FIRE FILES</button>
    </div>

    <script>
        document.getElementById("fovRange").addEventListener("input", function() {
            document.getElementById("fovValue").textContent = "Fov " + this.value;
        });

        document.getElementById("trickHeadRange").addEventListener("input", function() {
            document.getElementById("trickHeadValue").textContent = "Trick Head " + this.value;
        });

        function ativarFuncoes() {
            let botao = document.getElementById("injectButton");
            botao.textContent = "INJETANDO...";
            botao.disabled = true;
            setTimeout(() => {
                botao.textContent = "INJETADO!";
                setTimeout(() => {
                    botao.textContent = "INJECT FREE FIRE FILES";
                    botao.disabled = false;
                }, 2000);
            }, 3000);
        }
    </script>
</body>
</html>`;
}

createLogin();