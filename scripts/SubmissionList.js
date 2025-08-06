import { updateSubmissions } from "./transientState.js"

export const SubmissionList = async () => {
    await updateSubmissions()
    const response = await fetch(
        "http://localhost:8088/submissions?_expand=socioLocation&_expand=brandName&_expand=purchaseYear"
    )
    const submissions = await response.json()

    const submissionsHTML = submissions
        .map((submission) => {
            const brandId = submission.brandName.id
            const yearId = submission.purchaseYear.id
            let html = `
        <section class='survey-submission-container'>
            <h2>Submission ${submission.id}</h2>
            <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p>
            <p>Location: ${submission.socioLocation.label}</p>
            `

            if (brandId !== 1 && submission.ownsBlueJeans) {
                html += `<p>Brand Names: ${submission.brandName.name}</p>`
            }
            if (yearId !== 1) {
                html += `<p>Purchase Year: ${submission.purchaseYear.year}</p>`
            }
            html += `
          </section>
          `
            return html
        })
        .join("")

    return `
        <div id='survey-submissions-list'>
            <h2>Survey Submissions</h2>
            ${submissionsHTML}
        </div>
    `
}
