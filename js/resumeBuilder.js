/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Retief Visser",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "1234547678",
        "email": "retief.visser@gmail.com",
        "github": "scaredcat",
        "location": "Canberra, Australia"
    },
    "skills": ["Java", "JavaScript", "HTML5", "CSS3", "PHP"],
    "welcomeMessage": "Welcome to my CV",
    "biopic": "images/head.png",
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);

        if (this.contacts.hasOwnProperty("twitter")) {
            var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
            $("#topContacts").append(formattedTwitter);
        }

        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < this.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "University of Adelaide",
        "location": "Adelaide, South Australia",
        "degree": "Bachelor of Engineering",
        "majors": ["Software Engineering"],
        "dates": "2010-2013",
        "url": "http://www.adelaide.edu.au"
    }],
    "onlineCourses": [],
    "display": function() {

        this.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);



            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);

            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedSchoolMajor);
            });

        });

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
        }

        this.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%".course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            formattedOnlineURL = formattedOnlineURL.replace("#", course.url);

            $("#education").append(HTMLschoolStart);
            $(".education-entry").last().append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry").last().append(formattedOnlineDates);
            $(".education-entry").last().append(formattedOnlineURL);
        });
    }
};

var work = {
    "jobs": [{
        "employer": "University of Adelaide",
        "title": "Teaching Assistant",
        "location": "Adelaide, South Australia",
        "dates": "March 2013-June 2014",
        "description": "● Web & Database Computing, Introduction to Programming, Object Oriented Programming <br>● Assist with practicals for first year computer science students<br>● Deliver high quality tutorials for first year students<br>● Provide feedback"
    }],
    "display": function() {
        this.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Groupify Startup",
        "dates": "January 2014-April 2014",
        "description": "● Bootstrap, Ruby on Rails<br>● Developed software for student group formation<br>● Pitched startup business at Google Sydney to potential investors",
        "images": []
    }, {
        "title": "Data analysis for Westpac Bank",
        "dates": "March 2013-November 2013",
        "description": "● PHP, jQuery, MySQL<br>● Designed and developed web tools to analyse call centre statistics<br>● Customer collaboration with weekly meetings and email communication",
        "images": []
    }],
    "display": function() {


        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });


        });

    }
};

projects.display();
bio.display();
education.display();
work.display();

$("#mapDiv").append(googleMap);