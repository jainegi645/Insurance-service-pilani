import React from "react";
import { Html, Head } from "next/document";
import $ from "jquery";
import jsdom from "jsdom";


function Example() {
const $ = new jsdom.JSDOM().window;
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/stevenmonson/googleReviews/master/google-places.css"
        ></link>
      </Head>

      <body>
        <div id="google-reviews"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/stevenmonson/googleReviews@6e8f0d794393ec657dab69eb1421f3a60add23ef/google-places.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDeivU57j-macv2fXXgbhKGM6cqMLmnAFI&signed_in=true&libraries=places"></script>

<script>
jQuery(document).ready(function( $ ) {
   $("#google-reviews").googlePlaces({
        placeId: ' ChIJ23iJBSkZEzkR4HJX4IMCTgA' 
      , render: ['reviews']
      , min_rating: 4
      , max_rows:4
   })
});
 </script>

   </body>
    </Html>
  );
}

export default Example;
