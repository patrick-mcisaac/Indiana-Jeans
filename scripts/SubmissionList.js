export const SubmissionList = async () => {

    const response = await fetch('http://localhost:8088/submissions?_expand=socioLocation')
    const submissions = await response.json()


    let html = `
    <div id='survey-submission-list'>
        <h2>Survey Submissions</h2>
    `
    const submissionsHTML = submissions.map((submission) => {
        return `
            <section class='survey-submission-container'>
                <h2>Submission ${submission.id}</h2>
                <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p>
                <p>Location: ${submission.socioLocation.label}</p>
            </section>
        `
    })

    html += submissionsHTML.join('')

    html +=`</div>`

    return html
}