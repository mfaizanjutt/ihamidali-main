document.addEventListener("DOMContentLoaded", function () {
  mapExperienceData();
});

function mapExperienceData() {
  let exp = [
    {
      org: "SUFFATECH IT SOLUTIONS SAHIWAL",
      position: "Flutter Developer",
      duration: "FEBURARY 2024 -March 2025",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "MySQL",
        "PHP",
        "Ai Integration",
        "Getx",
        "Riverpod",
        "CRUD Operations",
      ],
      details: [
        "Started as an Intern, gaining hands-on experience in Flutter development and mobile app architecture.",
        "Promoted to Junior Developer, expanding technical expertise in Flutter, REST APIs, and state management.",
        "integrated REST APIs for real-time data exchange, increased engagement and Optimized performance using lazy loading, caching, and state management",
      ],
    },
  ];

  for (var i = 0; i < exp.length; i++) {
    var expCard = document.createElement("div");
    expCard.className = "exp-card";

    var expMetaDiv = document.createElement("div");
    expMetaDiv.className = "exp-meta";

    var orgName = document.createElement("h2");
    orgName.className = "heading2 exp-org";
    orgName.innerHTML = exp[i]["org"];

    var position = document.createElement("span");
    position.className = "label exp-position";
    position.innerHTML = exp[i]["position"];

    var session = document.createElement("p");
    session.className = "body2 exp-session";
    session.innerHTML = exp[i]["duration"];

    var technologiesHeading = document.createElement("span");
    technologiesHeading.className = "body2 exp-tech";
    technologiesHeading.innerHTML = "Technologies";

    var technologiesList = document.createElement("ul");
    technologiesList.className = "exp-tech-list";

    for (var k = 0; k < exp[i]["technologies"].length; k++) {
      var techName = document.createElement("li");
      techName.className = "body2 exp-tech-item";
      techName.innerHTML = exp[i]["technologies"][k];
      technologiesList.appendChild(techName);
    }
    expMetaDiv.appendChild(orgName);
    expMetaDiv.appendChild(position);
    expMetaDiv.appendChild(session);
    expMetaDiv.appendChild(technologiesHeading);
    expMetaDiv.appendChild(technologiesList);
    expCard.appendChild(expMetaDiv);

    var detailsList = document.createElement("ul");
    detailsList.className =
      "exp-detail d-flex flex-column justify-content-center";

    for (var k = 0; k < exp[i]["details"].length; k++) {
      var detail = document.createElement("li");
      detail.className = "body2 exp-detail-item";
      detail.innerHTML = exp[i]["details"][k];
      detailsList.appendChild(detail);
    }

    expCard.appendChild(detailsList);

    var experiences = document.getElementById("exp");
    experiences.appendChild(expCard);
  }
}
