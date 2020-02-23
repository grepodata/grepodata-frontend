import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {environment} from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

	constructor(private httpClient: HttpClient) { }

	public get loggedIn(): boolean{
		let localToken = localStorage.getItem('access_token');
		return localToken !==  null;
	}

	public get accessToken(): string{
		return localStorage.getItem('access_token');
	}

	public login(email:string, password:string, captcha:string) {
		let data = new HttpParams()
			.set('mail', email)
			.set('password', password)
			.set('captcha', captcha);
		return this.httpClient.post<any>(apiUrl + '/auth/login', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})})
			.pipe(tap(res => {
			localStorage.setItem('access_token', res.access_token);
		}))
	}

	public register(email:string, password:string, captcha:string) {
		let data = new HttpParams()
			.set('mail', email)
			.set('password', password)
			.set('captcha', captcha);
		return this.httpClient.post<any>(apiUrl + '/auth/register', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})})
			.pipe(tap(res => {
				localStorage.setItem('access_token', res.access_token);
		}))
	}

	/**
	 * Renew the access token if it is valid.
	 * throws 401 if invalid or expired token
	 * @returns {Observable<any>}
	 */
	public verifyToken() {
		let data = new HttpParams()
			.set('access_token', this.accessToken);
		return this.httpClient.post<any>(apiUrl + '/auth/token', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})})
			.pipe(tap(res => {
				localStorage.setItem('access_token', res.access_token);
		}))
	}

	public newConfirmation() {
		let data = new HttpParams()
      .set('access_token', this.accessToken);
		return this.httpClient.post<any>(apiUrl + '/auth/newconfirm', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})});
	}

	public resetPassword(token:string, password:string, captcha:string) {
		let data = new HttpParams()
      .set('token', token)
      .set('new_password', password)
      .set('captcha', captcha);
		return this.httpClient.post<any>(apiUrl + '/auth/changepassword', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})});
	}

	public changePassword(password:string, captcha:string) {
		let data = new HttpParams()
      .set('access_token', this.accessToken)
      .set('new_password', password)
      .set('captcha', captcha);
		return this.httpClient.post<any>(apiUrl + '/auth/changepassword', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})});
	}

	public forgot(email:string, captcha:string) {
		let data = new HttpParams()
			.set('mail', email)
			.set('captcha', captcha);
		return this.httpClient.post<any>(apiUrl + '/auth/reset', data,
			{headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})})
			.pipe(tap(res => {
				localStorage.setItem('access_token', res.access_token);
		}))
	}

	logout() {
		localStorage.removeItem('access_token');
	}
}