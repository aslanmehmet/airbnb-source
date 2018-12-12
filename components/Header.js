import Head from 'next/head';

const Header = (props) => (
    <Head>
       
        {/*<!-- META TAGS -->*/}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<!-- FAV ICON(BROWSER TAB ICON) -->*/}
        <link rel="shortcut icon" href="static/images/fav.ico" type="image/x-icon" />
        {/*<!-- <!-- GOOGLE FONT --> -->*/}
        <link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet" />
        {/*<!-- <!-- FONTAWESOME ICONS --> -->*/}
        <link rel="stylesheet" href="static/css/font-awesome.min.css" />
        {/*<!-- <!-- ALL CSS FILES --> -->*/}
        <link href="static/css/materialize.css" rel="stylesheet" />
        <link href="static/css/style.css" rel="stylesheet" />
        <link href="static/css/bootstrap.css" rel="stylesheet" type="text/css" />
        {/*<!-- <!-- RESPONSIVE.CSS ONLY FOR MOBILE AND TABLET VIEWS --> -->*/}
        <link href="static/css/responsive.css" rel="stylesheet" />
        {/*
              <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
              <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
              <!--[if lt IE 9]>
              
              <script src="static/js/html5shiv.js"></script>
              <script src="static/js/respond.min.js"></script>*/}
        {/*<![endif]-->*/}

        {props.children}
        
    </Head>
);

export default Header;