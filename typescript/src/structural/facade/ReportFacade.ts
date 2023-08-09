import Report from "./Report";
import ReportHeader from "./ReportHeader";
import ReportBody from "./ReportBody";
import ReportFooter from "./ReportFooter";

export default class ReportFacade {
  report: Report;

  constructor(
    header: string, body: string, footer: string
  ){
    this.report = new Report()
    this.report.setHeader(new ReportHeader(header))
    this.report.setBody(new ReportBody(body))
    this.report.setFooter(new ReportFooter(footer))
  }

  generate() {
    return this.report.generate()
  }
}