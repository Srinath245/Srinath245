/*var profial = document.getElementById("profial");
var technical_skills = document.getElementById("technical-skills");
var soft_skills = document.getElementById("soft-skills");
var languages = document.getElementById("languages");
var school = document.getElementById("school");
var certifications = document.getElementById("certifications");
var content_box = document.getElementById("content-box");*/

var profial_me = document.getElementById("content-box");
var msg_box_1 = document.getElementById("msg-box-1");
var soft_skills = document.getElementById("msg-box-2");
var languages = document.getElementById("msg-box-3");
var school = document.getElementById("msg-box-4");
var certifications = document.getElementById("msg-box-5");





function profial_change()
{
    profial_me.style.display="inline";
    msg_box_1.style.display="none";
    languages.style.display="none";
    soft_skills.style.display="none";
    school.style.display="none";
    certifications.style.display="none";
}


function skills()
{
    msg_box_1.style.display="inline";
    profial_me.style.display="none";
    languages.style.display="none";
    soft_skills.style.display="none";
    school.style.display="none";
    certifications.style.display="none";
}

function lan()
{
    languages.style.display="inline";
    msg_box_1.style.display="none";
    soft_skills.style.display="none";
    school.style.display="none";
    certifications.style.display="none";
    profial_me.style.display="none";
}

function so_skills()
{
    soft_skills.style.display="inline";
    profial_me.style.display="none";
    msg_box_1.style.display="none";
    languages.style.display="none";
    school.style.display="none";
    certifications.style.display="none";
}

function school_ch()
{
    school.style.display="inline";
    soft_skills.style.display="none";
    profial_me.style.display="none";
    msg_box_1.style.display="none";
    languages.style.display="none";
    certifications.style.display="none";
}

function certifications_ch()
{
    certifications.style.display="inline";
    profial_me.style.display="none";
    msg_box_1.style.display="none";
    languages.style.display="none";
    school.style.display="none";
    soft_skills.style.display="none";
}