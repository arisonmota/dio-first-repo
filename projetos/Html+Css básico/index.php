<html>
    <head>
        <meta charset="utf-8">
        <title>Meu primeiro site em PHP!!</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

        <script>
             $( function() {
                 $( "#accordion" ).accordion({
                     collapsible: true
                    });
                     } );
        </script>

        <style type="text/css">
            .linha {
                font-weight: bold;
                color: red;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>

    <body>
        <h1>Página usando PHP e Jquery</h1>
        <h2>Exemplo de Accordion</h2>
        <div id="accordion">
            <h3>Seção 1</h3>
                <div>
                    <?php
                    for($i = 0; $i <10; $i++) {
                        print("<span class=\"linha\">Linha número " .$i. "</span><br />");
                    }?>
                </div>
            <h3>Seção 2</h3>
                <div>
                    <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna. </p>
                </div>
        </div>
    </body>

    <script type="text/javascript">
        $(document).ready(function() {
            alert("Wooohooo");
        });
    </script>

</html>
