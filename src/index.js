class User {
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.userId = User.incrementId();
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

class Patient extends User {
  constructor(
    firstName,
    lastName,
    address,
    birthDate,
    weight,
    ssId,
    lstPractitionersUserId
  ) {
    super(firstName, lastName, address);
    this.birthDate = birthDate;
    this.weight = weight;
    this.ssId = ssId;
    this.lstPractitionersUserId = lstPractitionersUserId;
  }
}

class Practitioner extends User {
  constructor(firstName, lastName, address, title, speciality, qualification) {
    super(firstName, lastName, address);
    this.title = title;
    this.speciality = speciality;
    this.qualification = qualification;
  }
}

class Pharmacist extends User {
  constructor(firstName, lastName, address, pharmaName) {
    super(firstName, lastName, address);
    this.pharmaName = pharmaName;
  }
}

class Drug {
  constructor(
    drugName,
    drugFormat,
    drugBoxImg,
    drugContentImg,
    isGeneric,
    lstPrincepsId
  ) {
    this.drugName = drugName;
    this.drugFormat = drugFormat;
    this.drugBoxImg = drugBoxImg;
    this.drugContentImg = drugContentImg;
    this.isGeneric = isGeneric;
    this.lstPrincepsId = lstPrincepsId;
    this.drugId = Drug.incrementId();
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}
class Prescription {
  constructor(
    userIdPractitioner,
    userIdPatient,
    datePrescription,
    commentPrescription,
    lstTreatmentsId
  ) {
    this.userIdPractitioner = userIdPractitioner;
    this.userIdPatient = userIdPatient;
    this.datePrescription = datePrescription;
    this.commentPrescription = commentPrescription;
    this.lstTreatmentsId = lstTreatmentsId;
    this.prescriptionId = Prescription.incrementId();
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

class Treatment {
  constructor(
    drugId,
    nbDrug,
    perDayDrug,
    duration,
    commentDrug,
    substitutable
  ) {
    this.drugId = drugId;
    this.nbDrug = nbDrug;
    this.perDayDrug = perDayDrug;
    this.duration = duration;
    this.commentDrug = commentDrug;
    this.substitutable = substitutable;
    this.treatmentId = Treatment.incrementId();
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
} //#region création des patients / practitioners / pharmacists / drugs

let patients = [];
patients.push(
  new Patient(
    "Jean-Michel",
    "Patient",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    new Date(2014, 0, 1, 1),
    75,
    1801236549871,
    [5]
  )
);
patients.push(
  new Patient(
    "Bernard",
    "Tresmalade",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    new Date(2014, 0, 1, 1),
    75,
    1851239549871,
    []
  )
);
patients.push(
  new Patient(
    "Samuel",
    "Souffrant",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    new Date(2014, 0, 1, 1),
    75,
    1926543289752,
    [5, 7]
  )
);
patients.push(
  new Patient(
    "Claude",
    "Enforme",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    new Date(2014, 0, 1, 1),
    75,
    2626974376589,
    []
  )
);
//console.log('patients: ', patients[0]);

let practitioners = [];
practitioners.push(
  new Practitioner(
    "Pierre",
    "Louche",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Docteur",
    "Médecin généraliste",
    "Diplomé de la Faculté de Lyon"
  )
);
practitioners.push(
  new Practitioner(
    "Alain",
    "Boiteux",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Docteur",
    "Kinésithérapeute",
    "Diplomé de la Faculté de Lyon"
  )
);
practitioners.push(
  new Practitioner(
    "Stéphane",
    "Carie",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Docteur",
    "Dentiste",
    "Diplomé de la Faculté de Lyon"
  )
);
practitioners.push(
  new Practitioner(
    "Marie",
    "Mélanome",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Docteur",
    "Dermatologue",
    "Diplomé de la Faculté de Lyon"
  )
);
//console.log('practitioners: ', practitioners);

let pharmacists = [];
pharmacists.push(
  new Pharmacist(
    "Jean",
    "Cachet",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Pharmacie Centrale"
  )
);
pharmacists.push(
  new Pharmacist(
    "Michel",
    "Douloureux",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Pharmacie xxx"
  )
);
pharmacists.push(
  new Pharmacist(
    "Sophie",
    "Panette",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Pharmacie yyyy"
  )
);
pharmacists.push(
  new Pharmacist(
    "Vincent",
    "Tibiotique",
    {
      address1: "adresse1",
      address2: "adresse2",
      postalCode: "69002",
      city: "Lyon"
    },
    "Pharmacie zzzz"
  )
);
//console.log('pharmacists: ', pharmacists[0]);

let drugs = [];
drugs.push(
  new Drug(
    "Mythoprane 1000 mg",
    "comprimé",
    "./img/doliprane100mgBox.jpg",
    "./img/doliprane100mgContent.jpg",
    false,
    []
  )
);
drugs.push(
  new Drug(
    "Advil",
    "gellule",
    "./img/advilBox.jpg",
    "./img/advilContent.jpg",
    false,
    []
  )
);
drugs.push(
  new Drug(
    "Dafalgan",
    "sachet",
    "./img/dafalganBox.jpg",
    "./img/dafalganContent.jpg",
    false,
    []
  )
);
drugs.push(
  new Drug(
    "Geneliprane 100 mg",
    "comprimé",
    "./img/geneliprane100mgBox.jpg",
    "./img/geneliprane100mgContent.jpg",
    true,
    [1]
  )
);
drugs.push(
  new Drug(
    "Voltaren",
    "suppositoire",
    "./img/voltarenBox.jpg",
    "./img/voltarenContent.jpg",
    false,
    []
  )
);
//console.log('drugs: ', drugs[0]);

//#endregion

// creation d'une prescription et treatment en dur

let prescriptions = [];
// let prescriptions = [

//   {
//     commentPrescription: "Commentaire !!!",
//     datePrescription: "Thu Jun 25 2020 15:54:26 GMT+0200 (heure d’été d’Europe centrale)",
//     lstTreatmentsId: [1],
//     prescriptionId: 2,
//     userIdPatient: 1,
//     userIdPractitioner: 5
//   }
// ]

// let treatments = [{
//   commentDrug: "...",
//   drugId: 5,
//   duration: 3,
//   nbDrug: 1,
//   perDayDrug: 2,
//   substitutable: false,
//   treatmentId: 1
// }]

let treatments = [];

// Insertion HTML des valeurs en dur

//$(document).ready(function(){
//});

// Remplissage de la section demo

// Select Patient
let selectedPatientId;

for (let patient of patients) {
  $("#selectPatientDemo").append(
    `<option value="${patient.userId}">${patient.lastName} ${
      patient.firstName
    } - ${patient.ssId}</option>`
  );
}

// $("#selectPatientDemo").change(() => {
// $("#prescriptionsPatient").empty();
// selectedPatientId = parseInt($("#selectPatientDemo").val());

selectedPatientId = 1; /******************************************************************* */

console.log("selectedPatientId: ", selectedPatientId);

if (selectedPatientId == 0) {
  $("#patient").hide();
} else {
  $("#patient").show();

  //fillPatient();

  console.log("prescriptions: ", prescriptions);
  console.log("selectedPatientId: ", selectedPatientId);
  // console.log('userIdPatient: ', prescriptions[0].userIdPatient);
  let lstPrescriptions = prescriptions.filter(
    prescription => prescription.userIdPatient == selectedPatientId
  );
  console.log("lstPrescriptions: ", lstPrescriptions);

  for (let prescription of lstPrescriptions) {
    $("#prescriptionsPatient").append(
      `<div class="ordonnance"><p>Ordonnance du ` +
        new Date(prescription.datePrescription).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }) +
        `</p><button class="see" type="button">Voir l'ordonnance</button>
      <button class="send" type="button">Envoyer l'ordonnance</button></div><div id="prescriptionContent` +
        prescription.prescriptionId +
        `"></div>`
    );
    $("#prescriptionContent" + prescription.prescriptionId).empty();
    for (let treatment of prescription.lstTreatmentsId) {
      console.log("treatment: ", treatment);

      let detail = treatments.map(item => {
        if (parseInt(item.treatmentId) == parseInt(treatment)) return item;
      })[0];

      console.log("detail: ", detail);

      let drugName = drugs.filter(drug => drug.drugId === detail.drugId)[0]
        .drugName;
      let drugFormat = drugs.filter(drug => drug.drugId === detail.drugId)[0]
        .drugFormat;
      $("#prescriptionContent" + prescription.prescriptionId).append(
        `<li>${drugName} : ${detail.nbDrug} ${drugFormat}` +
          (detail.nbDrug > 1 ? `s` : ``) +
          ` ${detail.perDayDrug} fois par jour pendant ${
            detail.duration
          } jour` +
          (detail.duration > 1 ? `s ` : ``) +
          `${detail.commentDrug}` +
          (detail.substitutable ? `` : ` - <b>non substituable</b>`) +
          `</li>`
      );
    }
  }
}

$("#selectPractitionerDemo").val(0);
$("#selectPharmacistDemo").val(0);
// $("#practitioner").hide();
// $("#pharmacist").hide();

// });

// Select Practitioner

for (let practitioner of practitioners) {
  $("#selectPractitionerDemo").append(
    `<option value="${practitioner.userId}">${practitioner.lastName} ${
      practitioner.firstName
    } - ${practitioner.speciality}</option>`
  );
}
let selectedPractitionerUserId;
//$("#selectPractitionerDemo").change(() => {
// selectedPractitionerUserId = parseInt($("#selectPractitionerDemo").val());
selectedPractitionerUserId = 5; //////////////////////////////////////
if (selectedPractitionerUserId == 0) {
  $("#practitioner").hide();
} else {
  $("#practitioner").show();

  let lstSelectedPatients = patients.filter(
    patient =>
      patient.lstPractitionersUserId.indexOf(selectedPractitionerUserId) !== -1
  );
  $("#selectPatient").empty();
  $("#selectPatient").append(
    `<option value="0">Sélectionner un patient</option>`
  );
  for (let patient of lstSelectedPatients) {
    $("#selectPatient").append(
      `<option value="${patient.userId}">${patient.lastName} ${
        patient.firstName
      } - ${patient.ssId}</option>`
    );
  }

  fillPrescription();
}
// $('#selectPatientDemo').val(0);
// $('#selectPharmacistDemo').val(0);
// $("#patient").hide();
// $("#pharmacist").hide();
//}
//);

// Select Pharmacist

for (let pharmacist of pharmacists) {
  $("#selectPharmacistDemo").append(
    `<option value="${pharmacist.userId}">${pharmacist.pharmaName} - ${
      pharmacist.lastName
    } ${pharmacist.firstName}</option>`
  );
}
let selectedPharmacistId;
$("#selectPharmacistDemo").change(() => {
  selectedPharmacistId = $("#selectPharmacistDemo").val();
  selectedPharmacistId == 0 ? $("#pharmacist").hide() : $("#pharmacist").show();
  $("#selectPatientDemo").val(0);
  $("#selectPractitionerDemo").val(0);
  $("#patient").hide();
  $("#practitioner").hide();
});

// Remplissage Sections

// section Patient

// section Practitioner

function fillPrescription() {
  let selectedPractitioner = practitioners.filter(
    practitioner => practitioner.userId === parseInt(selectedPractitionerUserId)
  )[0];
  $(".header1").empty();
  $(".header1").append(`<p>${selectedPractitioner.title} ${
    selectedPractitioner.firstName
  } ${selectedPractitioner.lastName}
  </p><p>${selectedPractitioner.speciality}</p><hr><p>${
    selectedPractitioner.qualification
  }</p>`);
  $(".header2").empty();
  $(".header2").append(
    `<p>${
      selectedPractitioner.address.city
    }, le ${new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })}</p>`
  );

  $("#selectPatient").change(() => {
    treatments = [];
    let selectedPatientId;

    $(".patient").empty();
    selectedPatientId = parseInt($("#selectPatient").val());
    let selectedPatient = patients.filter(
      patient => patient.userId === selectedPatientId
    )[0];

    if (selectedPatientId !== 0) {
      $(".patient").append(`<p>${selectedPatient.firstName} ${
        selectedPatient.lastName
      }</p>
      <p>${new Date().getFullYear() -
        selectedPatient.birthDate.getFullYear()} ans - ${
        selectedPatient.weight
      } Kg</p>`);
      $(".listeMed").show();
      $("#selectDrug").empty();
      $("#selectDrug").append(
        `<option value="0">Choisissez un médicament</option>`
      );
      let lstPrincepsDrugs = drugs.filter(drug => !drug.isGeneric);
      for (let princepsDrug of lstPrincepsDrugs) {
        $("#selectDrug").append(
          `<option value="${princepsDrug.drugId}">${
            princepsDrug.drugName
          }</option>`
        );
      }

      // AFFICHAGE treatments

      addTreatment();
    }
  });
}

function addTreatment() {
  $("#btnAddTreatment").click(() => {
    let treatment = new Treatment();
    treatment.drugId = parseInt($("#selectDrug").val());
    treatment.nbDrug = parseInt($("#nbDrug").val());
    treatment.perDayDrug = parseInt($("#perDayDrug").val());
    treatment.duration = parseInt($("#duration").val());
    treatment.commentDrug = $("#commentDrug").val();
    treatment.substitutable = !$("#substitutable").is(":checked");

    let treatmentIsValid = true;
    let message = "<p>Attention :</p>";
    if (treatment.drugId == 0) {
      treatmentIsValid = false;
      message += "<p>Vous n'avez pas choisi de médicament.</p>";
    }
    if (isNaN(treatment.nbDrug)) {
      treatmentIsValid = false;
      message += "<p>Vous n'avez pas indiqué la quantité par prise.</p>";
    }
    if (isNaN(treatment.perDayDrug)) {
      treatmentIsValid = false;
      message += "<p>Vous n'avez pas indiqué la fréquence des prises.</p>";
    }
    if (isNaN(treatment.duration)) {
      treatmentIsValid = false;
      message += "<p>Vous n'avez pas indiqué la durée du traitement.</p>";
    }

    if (!treatmentIsValid) {
      $("#message").html(message);
    } else {
      $("#message").empty();

      // console.log("treatments: ", treatments);
      // console.log("treatment:", treatment);
      treatments.push(treatment);
      // console.log("treatments: ", treatments);

      $(".lstTreatments").empty();
      for (let treatment of treatments) {
        let drugName = drugs.filter(drug => drug.drugId === treatment.drugId)[0]
          .drugName;
        let drugFormat = drugs.filter(
          drug => drug.drugId === treatment.drugId
        )[0].drugFormat;
        $(".lstTreatments").append(
          `<li>${drugName} : ${treatment.nbDrug} ${drugFormat}` +
            (treatment.nbDrug > 1 ? `s` : ``) +
            ` ${treatment.perDayDrug} fois par jour pendant ${
              treatment.duration
            } jour` +
            (treatment.duration > 1 ? `s ` : ``) +
            `${treatment.commentDrug}` +
            (treatment.substitutable ? `` : ` - <b>non substituable</b>`) +
            `</li>`
        );
      }

      $("#selectDrug").val("0");
      $("#nbDrug").val("");
      $("#perDayDrug").val("");
      $("#duration").val("");
      $("#commentDrug").val("");
      $("#substitutable").prop("checked", false);
    }
  });
}

$("#btnAddTreatments").click(() => {
  let prescription = new Prescription();
  prescription.lstTreatmentsId = treatments.map(
    treatment => treatment.treatmentId
  );
  prescription.datePrescription = new Date();
  prescription.userIdPatient = parseInt($("#selectPatient").val());
  prescription.userIdPractitioner = selectedPractitionerUserId;
  prescription.commentPrescription = $("#commentairesMed").val();
  // console.log($('#commentairesMed').val());
  // console.log('prescription: ', prescription);
  // console.log('prescriptions: ', prescriptions);
  prescriptions.push(prescription);
  // console.log('prescriptions: ', prescriptions);
});
