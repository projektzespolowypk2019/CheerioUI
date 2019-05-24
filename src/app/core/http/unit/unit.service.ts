import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {server} from "../../../../environments/api-environment";
import {UnitModel} from "../../../shared/models/unit.model";
import {units} from "../api-routes";

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Array<UnitModel>> {
    return this.http.get<Array<UnitModel>>(
      server.address + units.uri
    );
  }

  create(unit: UnitModel): Observable<HttpResponse<UnitModel>> {
    return this.http.post<UnitModel>(
      server.address + units.uri,
      unit,
      {observe: 'response'}
    )
  }

}
