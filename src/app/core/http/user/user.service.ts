import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {server} from "../../../../environments/api-environment";
import {users} from "../api-routes";
import {LoginResponseModel} from "../../../shared/models/login-response.model";
import {RegisterRequestModel} from "../../../shared/models/register-request.model";
import {UserModel} from "../../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<LoginResponseModel> {
    return this.http.get<LoginResponseModel>(
      server.address + users.uri + '?nickname=' + login + '&password=' + password,
    );
  }

  register(user: RegisterRequestModel): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(
      server.address + users.uri,
      user,
      {observe: 'response'}
    )
  }
}
