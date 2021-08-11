<?php 
    $card = ["summary","summary_large_image"];
    $site = ["oha_oha_Ohashi","doremi_Ohashi"];
    $url = "https://ketcha.xyz/hono/binT/1";
    $title = "10進数は甘え";
    $dis = "128秒で1周するよ";
    $img = "https://ketcha.xyz/hono/binT/1/myphp/Screenshot_binT.jpg";
?>

<meta name="twitter:card" content
    =<?php echo rtrim($card[1], '/')?> > 
<meta name="twitter:site" content
    = <?php echo rtrim($site[0], '/')?>> 

<meta property="og:url" content
    = <?php echo $url; ?> > 
<meta property="og:title" content
    = <?php echo rtrim( $title, '/'); ?>> 
<meta property="og:description" content
    = <?php echo $dis; ?>> 
<meta property="og:image" content
    =<?php echo $img ?> > <!--⑥-->
