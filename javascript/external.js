var webmaps =
  [
    ["Google Maps",
    "https://www.google.com/maps/",
    "Google Maps is probably the most well-known and used GPS/Mapping application in the US. The primary purpose of google maps is to provide GPS navigation to the public; although it has many other uses including street view & satellite imagery."
  ],
  ["Mapquest",
  "https://www.mapquest.com/",
  "Mapquest was the first commercial web mapping services available to users, launching in 1996. The advanced technology (at the time) was groundbreaking, making it the most popular web mapping services in the 2000s."
  ]
];

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      if(column<2){
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
      else {
        document.write("</tr> <tr> <td colspan='2'>" + webmaps[row][column] + "<p></td></tr>");
      }

    }
    document.write("</tr>");
  }
  document.write("</table>");
}

function welcome()
{
   let a = "Please enter your name.";
   let b = "Type your name here.";

// A prompt box is used to prompt users to input a valuebefore entering a page.
user_name = window.prompt(a,b);

message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

return message
}
