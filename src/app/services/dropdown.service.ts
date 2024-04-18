import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  // Update your API path here
  private BASE_URL = 'http://localhost:8083/test';
  constructor(private http: HttpClient) {}

/**
   * Fetch All Applications
   * @returns Observable
   */
public getApplications(): Observable<any> {
  return this.http.get<any>(this.BASE_URL + '/applications');
}

/**
   * Fetch All Environments
   * @returns Observable
   */
public getEnvironments(): Observable<any> {
  return this.http.get<any>(this.BASE_URL + '/environments');
}


/**
   * Fetch All Environments
   * @returns Observable
   */
public getServers(appId:number,  envId:number): Observable<any> {
  return this.http.get<any>(this.BASE_URL + '/servers/'+appId+'/'+envId);
}


  /**
   * Fetch All Countries
   * @returns Observable
   */
  public getCountries(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + '/countries');
  }
  /**
   * Get states for a country
   * @param countryId
   * @returns Observable
   */
  public getStates(countryId: number): Observable<any> {
    return this.http.get<any>(
      this.BASE_URL + 'country/' + countryId
    );
  }
  /**
   * Get cities for a state
   * @param stateId
   * @returns Observable
   */
  public getCities(stateId: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'getcity&state_id=' + stateId);
  }
}