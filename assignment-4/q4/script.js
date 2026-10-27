
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Generate form fields dynamically
    createForm() {
        const container = document.getElementById("formContainer");

        const form = document.createElement("form");
        form.id = "dynamicForm";

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;
            label.htmlFor = field.name;

            const input = document.createElement("input");
            input.type = field.type;
            input.id = field.name;
            input.name = field.name;
            input.required = true;

            form.appendChild(label);
            form.appendChild(input);
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";

        form.appendChild(button);
        container.innerHTML = "";
        container.appendChild(form);

        form.addEventListener("submit", event => {
            event.preventDefault();

            const formData = this.getFormData();
            document.getElementById("result").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    // Return entered values as an object
    getFormData() {
        const data = {};

        this.fields.forEach(field => {
            data[field.name] =
                document.getElementById(field.name).value;
        });

        return data;
    }
}

// Define fields for the dynamic form
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email Address", name: "email" },
    { type: "text", label: "Course", name: "course" }
];

// Create and display the form
const formBuilder = new FormBuilder(fields);
formBuilder.createForm();
