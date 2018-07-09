import {Component, OnInit} from "@angular/core";
import {Resume} from "../shared/classes/resume";
import {ResumeService} from "../shared/services/resume.service";
import {faBook, faBriefcase, faCode, faEnvelope, faGlobe, faGraduationCap, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
	template: require("./resume.component.html")
})

export class ResumeComponent implements OnInit {
	faBook = faBook;
	faBriefcase = faBriefcase;
	faCode = faCode;
	faEnvelope = faEnvelope;
	faGithub = faGithub;
	faGlobe = faGlobe;
	faGraduationCap = faGraduationCap;
	faLinkedin = faLinkedin;
	faPhone = faPhone;
	faTwitter = faTwitter;
	faUser = faUser;

	constructor(private resumeService: ResumeService) {}

	resumeData: Resume = null;

	ngOnInit() {
		this.getResumeJson();
	}

	getResumeJson() {
		this.resumeService.getResumeJson()
			.subscribe(resumeData => this.resumeData = resumeData);
	}

	formatPhone(phone: string) {
		if(phone === undefined) {
			return;
		}

		let regex = /[^0-9\+]/g;
		return("tel:" + phone.replace(regex, ""));
	}
}
