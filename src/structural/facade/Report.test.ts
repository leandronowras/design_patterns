import Report from "./Report"
import ReportBody from "./ReportBody"
import ReportFacade from "./ReportFacade"
import ReportFooter from "./ReportFooter"
import ReportHeader from "./ReportHeader"

test("should generate a report", () => {
  const report = new Report()
  report.setHeader(new ReportHeader("Header"))
  report.setBody(new ReportBody("Body"))
  report.setFooter(new ReportFooter("Footer"))
  const html = report.generate()

  expect(html).toBe("<div>Header</div><div>Body</div><div>Footer</div>")
})

test("should generate a report with facade", () => {
  const reportFacade = new ReportFacade("Header", "Body", "Footer")
  const html = reportFacade.generate()
  //obs: now the client doesnt know domain components

  expect(html).toBe("<div>Header</div><div>Body</div><div>Footer</div>")
})
