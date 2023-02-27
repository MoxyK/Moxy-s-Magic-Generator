// function to generate markdown for README
function renderLicensebadge(license) {
  if(license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `\n* [License](#license)\n`
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicensebadge(data.license)}

### Description

${data.description}

### Table of Contents

* [Installation](#installation)


* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)


* [Questions](#questions)


## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}

\`\`\`

## Usage

${data.usage}

## License

## Contributing

${data.contributing}

## Tests

To run test, run following command:

\`\`\`
${data.test}

\`\`\`

### Questions

For any inquiries or questions please contact me directly at ${data.email}.

You can findd more of my work  at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;

