document.addEventListener("DOMContentLoaded", function () {
  mapMetaDataInHeader();
  mapSocialLinksData();
  mapStatsData();
});

function mapMetaDataInHeader() {
  var tagElement = document.getElementById("tag-label");
  tagElement.innerText = "Flutter Developer";

  let firstName = "Mr.";
  let lastName = "Hamid Ali";

  var firstNameElement = document.getElementById("first-name");
  firstNameElement.innerHTML = firstName;

  var lastNameElement = document.getElementById("last-name");
  lastNameElement.innerHTML = lastName;
}

function mapSocialLinksData() {
  let socials = [
    {
      icon: "fa fa-linkedin-square",
      value: "https://www.linkedin.com/in/ihamidali/",
    },
    {
      icon: "fa fa-github",
      value: "https://github.com/devhamidali", 
    },
    {
      icon: "fa fa-facebook-square",
      value: "https://www.facebook.com/ihamidali.dev",
    },
    {
      icon: "fa fa-instagram",
      value: "https://www.instagram.com/ihamid_ali/",
    },
    {
      icon: "fa fa-envelope",
      value: "mailto:ihamidali.dev@gmail.com",
    },
  ];

  // icons in top section
  for (var i = 0; i < socials.length; i++) {
    var anchor = document.createElement("a");
    anchor.className = "social-icon-wrapper";

    var icon = document.createElement("i");
    icon.className = "social-icon " + socials[i]["icon"];

    var link = socials[i]["value"];
    anchor.href = link;
    anchor.target = "_blank";

    anchor.appendChild(icon);

    var socialHandles = document.getElementById("social-handles");
    socialHandles.appendChild(anchor);
  }

  // icons in contact section
  for (var i = 0; i < socials.length; i++) {
    var anchor = document.createElement("a");
    anchor.className = "social-icon-wrapper";
    anchor.style.padding = "3%";

    var icon = document.createElement("i");
    icon.className = "social-icon " + socials[i]["icon"];

    var link = socials[i]["value"];
    anchor.href = link;
    anchor.target = "_blank";

    anchor.appendChild(icon);

    var socialHandlsContact = document.getElementById("social-contact-icons");
    var extraDiv = document.createElement("div");

    socialHandlsContact.appendChild(extraDiv);
    socialHandlsContact.appendChild(anchor);
    socialHandlsContact.appendChild(extraDiv);
  }
}
