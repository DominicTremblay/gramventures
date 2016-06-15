<?php

     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "crunchpress@info.com";
    $email_subject = "New Membership Form Submission";
	$error_message = '';

     

     
    // validation
    if(
        !isset($_POST['name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['message']))
		
		{
			
			echo "Fields are not filled properly";
			die();
    }
    
    $name = $_POST['name']; // required
	$email = $_POST['email']; // required
	$comments = $_POST['message'];
	
     
$email_message = '<html>';
$email_message = '<body>';
$email_message = '<head>';
$email_message = '<title>Your Details Are Below</title>';
$email_message = '</head>';
$email_message .= '<h1>Your Details Are Below</h1>';
$email_message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$email_message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$email_message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$email_message .= "<tr><td><strong>Comments:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
$email_message .= "</table>";
$email_message .= "</body></html>";	






$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: ". $email . "\r\n";
$headers .= "CC: susan@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


@mail($email_to, $email_subject, $email_message, $headers); 
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Photo Store</title>
<!--CUSTOM CSS-->
<link href="css/custom.css" rel="stylesheet" type="text/css">
<!--COLOR CSS-->
<link href="css/color.css" rel="stylesheet" type="text/css">
<!--bootstrap 3.3.5-->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<!--RESPONSIVE CSS-->
<link href="css/responsive.css" rel="stylesheet" type="text/css">
<!--FONTAWESOME CSS-->
<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
<!--OWL CAROUSEL CSS-->
<link href="css/owl.carousel.css" rel="stylesheet" type="text/css">
<!--ICONMOON CSS-->
<link href="css/iconmoon.css" rel="stylesheet" type="text/css">
<!--AUDIO PLAYER-->
<link href="css/audioplayer.css" rel="stylesheet">
<!-- Pretty Photo -->
<link href="css/prettyPhoto.css" rel="stylesheet">
<!--SCROLL FOR SIDEBAR NAVIGATION-->
<link href="css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
<!--YAMM MENU CSS-->
<link href="css/yamm-menu.css" rel="stylesheet" type="text/css">
<!--FAVICON ICON-->
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<!--GOOGLE FONTS-->
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900' rel='stylesheet' type='text/css'>
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body class="theme-style-1">
<!--Wrapper Start-->
<div id="wrapper"> 
  <!--HEADER START-->
  <header id="header">
    <section class="logo-row"> 
      <!--BURGER NAVIGATION SECTION START-->
      <div class="sidebar-menu-box">
        <div class="cp-burger-nav"> 
          <!--BURGER NAV BUTTON-->
          <div id="cp_side-menu-btn" class="cp_side-menu"><a href="#" class=""><span class="icon-icons-07"></span></a></div>
          <!--BURGER NAV BUTTON--> 
          
          <!--SIDEBAR MENU START-->
          <div id="cp_side-menu"> <a href="#" id="cp-close-btn" class="crose"><i class="fa fa-close"></i></a>
            <div class="cp-top-bar">
              <div class="login-section">
                <ul>
                  <li><a href="#"><i class="fa fa-sign-out"></i>Log in <b>/</b></a></li>
                  <li><a href="#"> Sign up</a></li>
                  <li><a href="#"><span class="icon-icons-05"></span></a></li>
                </ul>
              </div>
            </div>
            <strong class="logo-2"><a href="index.html"><img src="images/logo.png" alt="img"></a></strong>
            <form action="#">
              <input type="text" placeholder="Search photos" required>
              <button><span class="icon-icons-06"></span></button>
              <em>... or choose a category on right.</em>
            </form>
            <div class="content mCustomScrollbar">
              <div id="content-1" class="content">
                <div class="cp_side-navigation">
                  <nav>
                    <ul class="navbar-nav">
                      <li class="active"><a href="index.html">Home</a></li>
                      <li><a href="#">Popular</a></li>
                      <li><a href="#">Fresh</a></li>
                      <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Categories<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Categories One</a></li>
                          <li><a href="#">Categories Two</a></li>
                          <li><a href="#">Categories Three</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Photographers<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Dummy 1</a></li>
                          <li><a href="#">Dummy 2</a></li>
                          <li><a href="#">Dummy 3</a></li>
                          <li><a href="#">Dummy 4</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Galleries<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Dummy 1</a></li>
                          <li><a href="#">Dummy 2</a></li>
                          <li><a href="#">Dummy 3</a></li>
                          <li><a href="#">Dummy 4</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Portfolios<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Dummy 1</a></li>
                          <li><a href="#">Dummy 2</a></li>
                          <li><a href="#">Dummy 3</a></li>
                          <li><a href="#">Dummy 4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <a href="#" class="btn-newsletter">Get Newsletter Updates</a>
            <div class="cp-sidebar-social"> <strong class="title">Connect us on</strong>
              <ul>
                <li><a href="#"><span class="icon-socialicons-01"></span></a></li>
                <li><a href="#"><span class="icon-socialicons-02"></span></a></li>
                <li><a href="#"><span class="icon-socialicons-03"></span></a></li>
                <li><a href="#"><span class="icon-socialicons-04"></span></a></li>
                <li><a href="#"><span class="icon-socialicons-05"></span></a></li>
              </ul>
            </div>
            <strong class="copy">PhotoStore &copy; 2015 All Rights Reserved </strong> </div>
          <!--SIDEBAR MENU END--> 
          
        </div>
      </div>
      <!--BURGER NAVIGATION SECTION END-->
      <div class="login-section">
        <ul>
          <li><a href="#"><i class="fa fa-sign-out"></i>Log in <b>/</b></a></li>
          <li><a href="#"> Sign up</a></li>
          <li><a href="#"><span class="icon-icons-05"></span></a></li>
        </ul>
      </div>
      <div class="container"> <strong class="logo"><a href="index.html"><img src="images/logo.png" alt="logo"></a></strong> </div>
    </section>
    <!--NAVIGATION ROW START-->
    <section class="cp-navigation-row">
      <div class="container">
        <div class="navbar yamm navbar-default">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
          </div>
          <div id="navbar-collapse-1" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><a href="#">Popular</a></li>
              <li><a href="#">Fresh</a></li>
              <!-- Classic list -->
              
              <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Categories<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li> 
                    <!-- Content container to add padding -->
                    
                    <div class="yamm-content">
                      <div class="row">
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Grid Album</h4>
                          </li>
                          <li> <a href="gallery-grid-layout-1.html">Grid Album Style 1</a> </li>
                          <li> <a href="gallery-grid-layout-2.html">Grid Album Style 2</a> </li>
                          <li> <a href="gallery-grid-layout-3.html">Grid Album Style 3</a> </li>
                          <li> <a href="gallery-grid-layout-4.html">Grid Album Style 4</a> </li>
                          <li> <a href="gallery-grid-layout-5.html">Grid Album Style 5</a> </li>
                          <li> <a href="gallery-grid-layout-6.html">Grid Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Justified Album</h4>
                          </li>
                          <li> <a href="gallery-justified-layout-1.html">Justified Album Style 1</a> </li>
                          <li> <a href="gallery-justified-layout-2.html">Justified Album Style 2</a> </li>
                          <li> <a href="gallery-justified-layout-3.html">Justified Album Style 3</a> </li>
                          <li> <a href="gallery-justified-layout-4.html">Justified Album Style 4</a> </li>
                          <li> <a href="gallery-justified-layout-5.html">Justified Album Style 5</a> </li>
                          <li> <a href="gallery-justified-layout-6.html">Justified Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Masonry Album</h4>
                          </li>
                          <li> <a href="gallery-masonry-layout-1.html">Masonry Album Style 1</a> </li>
                          <li> <a href="gallery-masonry-layout-2.html">Masonry Album Style 2</a> </li>
                          <li> <a href="gallery-masonry-layout-3.html">Masonry Album Style 3</a> </li>
                          <li> <a href="gallery-masonry-layout-4.html">Masonry Album Style 4</a> </li>
                          <li> <a href="gallery-masonry-layout-5.html">Masonry Album Style 5</a> </li>
                          <li> <a href="gallery-masonry-layout-6.html">Masonry Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Metro Gallery</h4>
                          </li>
                          <li> <a href="gallery-metro-layout-1.html">Metro Gallery Style 1</a> </li>
                          <li> <a href="gallery-metro-layout-2.html">Metro Gallery Style 2</a> </li>
                          <li> <a href="gallery-metro-layout-3.html">Metro Gallery Style 3</a> </li>
                          <li> <a href="gallery-metro-layout-4.html">Metro Gallery Style 4</a> </li>
                          <li> <a href="gallery-metro-layout-5.html">Metro Gallery Style 5</a> </li>
                          <li> <a href="gallery-metro-layout-6.html">Metro Gallery Style 6</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <!-- Classic dropdown -->
              <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Photographers<b class="caret"></b></a>
                <ul role="menu" class="dropdown-menu classic-menu">
                  <li><a tabindex="-1" href="#"> Action </a></li>
                  <li><a tabindex="-1" href="#"> Another action </a></li>
                  <li><a tabindex="-1" href="#"> Something else here </a></li>
                  <li><a tabindex="-1" href="#"> Separated link </a></li>
                </ul>
              </li>
              <!-- Classic list -->
              <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Portfolios<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="yamm-content">
                      <div class="row">
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Grid Album</h4>
                          </li>
                          <li> <a href="gallery-grid-layout-1.html">Grid Album Style 1</a> </li>
                          <li> <a href="gallery-grid-layout-2.html">Grid Album Style 2</a> </li>
                          <li> <a href="gallery-grid-layout-3.html">Grid Album Style 3</a> </li>
                          <li> <a href="gallery-grid-layout-4.html">Grid Album Style 4</a> </li>
                          <li> <a href="gallery-grid-layout-5.html">Grid Album Style 5</a> </li>
                          <li> <a href="gallery-grid-layout-6.html">Grid Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Justified Album</h4>
                          </li>
                          <li> <a href="gallery-justified-layout-1.html">Justified Album Style 1</a> </li>
                          <li> <a href="gallery-justified-layout-2.html">Justified Album Style 2</a> </li>
                          <li> <a href="gallery-justified-layout-3.html">Justified Album Style 3</a> </li>
                          <li> <a href="gallery-justified-layout-4.html">Justified Album Style 4</a> </li>
                          <li> <a href="gallery-justified-layout-5.html">Justified Album Style 5</a> </li>
                          <li> <a href="gallery-justified-layout-6.html">Justified Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Masonry Album</h4>
                          </li>
                          <li> <a href="gallery-masonry-layout-1.html">Masonry Album Style 1</a> </li>
                          <li> <a href="gallery-masonry-layout-2.html">Masonry Album Style 2</a> </li>
                          <li> <a href="gallery-masonry-layout-3.html">Masonry Album Style 3</a> </li>
                          <li> <a href="gallery-masonry-layout-4.html">Masonry Album Style 4</a> </li>
                          <li> <a href="gallery-masonry-layout-5.html">Masonry Album Style 5</a> </li>
                          <li> <a href="gallery-masonry-layout-6.html">Masonry Album Style 6</a> </li>
                        </ul>
                        <ul class="col-sm-3 list-unstyled">
                          <li>
                            <h4>Metro Gallery</h4>
                          </li>
                          <li> <a href="gallery-metro-layout-1.html">Metro Gallery Style 1</a> </li>
                          <li> <a href="gallery-metro-layout-2.html">Metro Gallery Style 2</a> </li>
                          <li> <a href="gallery-metro-layout-3.html">Metro Gallery Style 3</a> </li>
                          <li> <a href="gallery-metro-layout-4.html">Metro Gallery Style 4</a> </li>
                          <li> <a href="gallery-metro-layout-5.html">Metro Gallery Style 5</a> </li>
                          <li> <a href="gallery-metro-layout-6.html">Metro Gallery Style 6</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div class="cp-search-box"><a href="#"><span class="icon-icons-06"></span></a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--NAVIGATION ROW END--> 
  </header>
  <!--HEADER END--> 
  
  <!--Inner Header Start-->
  <section class="cp-inner-banner">
    <h1>Thank You</h1>
    <p>Thank you for your form submission, as soon as we get this we will get back to you shortly.</p>
  </section>
  <!--Inner Header End--> 
  
  <div id="main"> 
  
    <!-- Start of Thank -->
    <section id="content_Wrapper" class="padding-tb-60">
      <section class="container">
        <section class="row">
          <section class="col-md-12 error-page">
            <div class="holder">
              <h2>Thank You</h2>
              <p>Thank you for your form submission, as soon as we get this we will get back to you shortly.</p>
            </div>
          </section>
        </section>
      </section>
    </section>
    <!-- End of Thank --> 
     <!--FOOTER START-->
  <footer id="footer">
    <div class="footer-social">
      <div class="cp-sidebar-social"> <strong class="title">Connect us on</strong>
        <ul>
          <li><a href="#"><span class="icon-socialicons-01"></span></a></li>
          <li><a href="#"><span class="icon-socialicons-02"></span></a></li>
          <li><a href="#"><span class="icon-socialicons-03"></span></a></li>
          <li><a href="#"><span class="icon-socialicons-04"></span></a></li>
          <li><a href="#"><span class="icon-socialicons-05"></span></a></li>
        </ul>
      </div>
    </div>
    <div class="copyrights"><strong class="copy">PhotoStore &copy; 2015 All Rights Reserved </strong></div>
  </footer>
  <!--FOOTER END--> 
  </div>
</div>
<!--Wrapper End--> 
<!--jQuery 1.11.3--> 
<script src="js/jquery-1.11.3.min.js"></script> 
<!--bootstrap 3.3.5--> 
<script src="js/bootstrap.min.js"></script> 
<!--OWL CAROUSEL JS--> 
<script src="js/owl.carousel.min.js"></script> 
<!--Background Moving Start--> 
<script src='js/bg-moving.js'></script> 
<!--PRETTY PHOTO JS--> 
<script src="js/jquery.prettyPhoto.js"></script> 
<!--SCROLL FOR SIDEBAR NAVIGATION--> 
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script> 
<!-- Audio Player --> 
<script src="js/audioplayer.js"></script> 
<script>$( function() { $( 'audio' ).audioPlayer(); } );</script> 
<!--CUSTOM SCRIPT--> 
<script src="js/custom.js"></script> 
<!--JQUERY END-->
</body>
</html>
