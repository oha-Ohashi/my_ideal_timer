<!doctype html>
<title>binT</title>
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ウェブアプリマニフェストの読み込み -->
    <link rel="manifest" href="manifest.json">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f"
            crossorigin="anonymous"></script>
    <script src="./static/honoka/js/bootstrap.js"></script>
    <link rel="stylesheet" href="static/honoka/css/bootstrap.css">
    <link rel="stylesheet" href="./static/css/style1.css">
    <!--<script src=""></script>-->
    <script>
            if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(function(registration) {
                // 登録成功
                console.log('ServiceWorker の登録に成功しました。スコープ: ', registration.scope);
            }).catch(function(err) {
                // 登録失敗
                console.log('ServiceWorker の登録に失敗しました。', err);
            });
        }
    </script>
</head>
 
<body class="text-white kt-bg">
    <header class=""></header>
    <div class="content container">
        
        <div id="rsv" class="kt-isl">
            <h4>Message:</h4>
            <div class="text-center mb-4" >
                <!--<h1 id="rsvwin" class="mb-0"></h1>-->
                <!--<span id="rsv_sa"></span>-->
                <h1 id="espmsg"></h1>
                from ESP at: <span id="lasttime"></span>
            </div>
            
        </div>
        <br>
        <div class="kt-isl">
            <h4>Buttons:</h4>
            <div class="text-center btn_row">
                <button class="btn btn-primary" id="test1">test1</button>
                <button class="btn btn-primary" id="test2">Ctrl + Tab</button>
            </div>
            <div class="text-center btn_row">
                <button class="btn btn-danger" id="push1">PUSH 1s</button>
                <button class="btn btn-danger" id="push8">PUSH 8s</button>
            </div>
            <div class="text-center btn_row">
                <button class="btn btn-warning" id="key1">Ctrl + Alt + Del</button>
            </div>
        </div>
        
        <div class="mt-4 text-muted">
            <a onclick="location.href='./index.php?alerm=BEEP'">
                BEEP</a>
            <a onclick="location.href='./index.php?alerm=WAKE'">
                WAKE</a>
            &ensp;
           <a onclick="location.href='./index.php?del=splice'">
                splice</a>
            <a onclick="location.href='./index.php?del=clear'">
                clear</a>
            <br>
            <!--<span id="unix"></span>-->
        </div>
        
        <div class="text-muted">
            $_GET['apo']: test<br/>
               </div>
    </div>
 
    <script type=text/javascript src="./static/js/sync.js"></script>
    
</body>
</html>