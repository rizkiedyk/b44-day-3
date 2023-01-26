function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let emailReceiver = "rizkikur73@gmail.com";

  if (name == "") {
    alert("Nama harus diisi !");
  } else if (email == "") {
    alert("Email harus diisi !");
  } else if (phone == "") {
    alert("Phone Number harus diisi !");
  } else if (subject == "") {
    alert("Subject harus diisi !");
  } else if (message == "") {
    alert("Pesan harus diisi !");
  }

  let mailTo = document.createElement("a");
  mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message} , silahkan hubungi saya dinomor ${phone}`;
  mailTo.click();
}
