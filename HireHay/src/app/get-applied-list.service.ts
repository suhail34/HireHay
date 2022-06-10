import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetAppliedListService {

  _url = "/api/application";
  constructor(private _http:HttpClient) { }
  getList(){
    return this._http.post<any>(this._url,{
        "stage": "prospect",
        "status": "active",
        "applicationType": "all",
        "sortByDate": "updatedAt DESC"
    },{headers:{
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRsUm9sZXMiOlsiT1BTRSIsIk9QUyJdLCJhZG1pbiI6bnVsbCwiYXBwbHlBbGVydHNDcm1Kb2JJZCI6IiIsImJ1SXRlbUlkIjoiNjA4MDE4NGMxYmRiM2ZkOTBiMzM4YWM2IiwiY2FsZW5kZXJUb2tlbiI6W3sicmVmcmVzaF90b2tlbiI6IjEvLzBnTFNmRnF5aEpPbTlDZ1lJQVJBQUdCQVNOd0YtTDlJclkzVVNSbk1Ja2FKU040Q2hTQmZrWWl5NWE5NVAyZVdtV3p5WV9ITE5LSjV1Y3dsR3loYW9Hc1pqMHFUWTIyMVVLQTgiLCJleHBpcnkiOjE2NDQ5MDUzMzIwMDcsImNhbGVuZGVyVHlwZSI6Imdvb2dsZSIsImNsaWVudElkIjoiOTU4NjEyNDA4MDMwLWltYXNtaGFkaDg3dTYzNnQ1NDFnODRvMWc5dG1uYzU0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiY2xpZW50X3NlY3JldCI6IktrV3Z2VG84M1lVREs0anFqSU1hR0pBNiJ9XSwiY3JlYXRlZEF0IjoiMjAxOC0xMC0xNVQwODoyOToxOS45NDBaIiwiY3VzdG9tZXIiOiI1NjY5NWM2YWZmMDNmODdhNDcyMGNlYWQiLCJjdiI6IjgxMzcxMzIyNDI5LnBkZiIsImRlcGFydG1lbnQiOiI1YTI2ODNjZTVlMDYyZTM0NWY3YzMxMWEiLCJkZXNpZ25hdGlvbiI6bnVsbCwiZW1haWwiOiJyZWNydWl0ZXJAYXJ0aXNzYXJ5LmNvbSIsImVtYWlsX3ZlcmlmaWNhdGlvbiI6eyJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJlbWFpbEFwaVRva2VuIjpbeyJyZWZyZXNoVG9rZW4iOiIxLy8wZ2ViQ251b2Y5dkE5Q2dZSUFSQUFHQkFTTndGLUw5SXJtLWozNzlRazY3VDMzaENaSVBJUHAyaWlpd1lXRUFjOEFGV2hBblNnLUd1UHNOZnhKUUdxSTJLOFZFNDRYSVRSOWVFIiwiZXhwaXJ5IjoxNjAzOTc0MjE5Mjg3LCJ0eXBlIjoiZ21haWwifV0sImVtYWlsUHJlZmVyZW5jZXMiOnsiYXBwbHlBbGVydHMiOiJpbnN0YW50Iiwib3ZlcmR1ZVRhc2tzIjoibm8iLCJzdGF0dXNDaGFuZ2VBbGVydHMiOiJ5ZXMiLCJvbmJvYXJkaW5nTWFpbHMiOiJubyJ9LCJmaXJzdE5hbWUiOiJSZWNydWl0ZXIiLCJmdWxsTmFtZSI6IlJlY3J1aXRlciBBcnRpc3NhcnlUZXN0IiwiaGFzaGtleUNyZWF0ZWREYXRlIjoiMjAyMi0wNi0wOVQxMzoxMTozNS44MDhaIiwibGFzdE5hbWUiOiJBcnRpc3NhcnlUZXN0IiwibG9jYXRpb24iOiJNdW1iYWksIE1haGFyYXNodHJhLCBJbmRpYSIsIm1hbmFnZXJzIjpbIjU2ZDk3ZTJiODViMjk2MWQ0ZTEyNzZjMSIsIjU2Njk1YzZhZmYwM2Y4N2E0NzIwY2VhYyJdLCJtb2JpbGUiOiI3MDQ1NDU4MzIwIiwib3ZlcmR1ZVRhc2tzQ3JtSm9iSWQiOiIiLCJyZWNydWl0ZXJTZXJpZXNNYWlsc1NlbnQiOnRydWUsInJlZkluZm8iOnsia2FybWEiOjUwLCJjb2lucyI6NTAwMH0sInJvbGUiOiJyZWNydWl0ZXIiLCJzZW5kRW1haWxUb2tlbiI6W3sicmVmcmVzaFRva2VuIjoiMS8vMGdOaTkzSEM0LWxYYUNnWUlBUkFBR0JBU053Ri1MOUlyWGVfcWI2M1VkbUUwZXpPRHpNemtBS1Z6cjA1S3JJT1JCQVRUX2NoTElIcDR1aVQ5dXhjakZ2b3pJUkFhMGNyZXNMUSIsImV4cGlyeSI6MTY0MjE1MDQwMDgwMSwidHlwZSI6ImdtYWlsIn1dLCJzZXJpZXNNYWlsQ3JtSm9iSWQiOm51bGwsInNpdGVBZG1pbiI6dHJ1ZSwic3RhdHVzIjoiYWN0aXZlIiwic3VwZXJVc2VyIjp0cnVlLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTA5VDEzOjExOjUzLjM3M1oiLCJkYWlseVBhcnNpbmdQZXJSZWNydWl0ZXIiOjAsImJ1Zm9sbG93IjpbXSwic2x1ZyI6ImFydGlzc2FyeSIsImlkIjoiNWJjNDRmZGY1MmNhMjMxNzRkOWUxOThhIiwiY29tcGFueU5hbWUiOiJBcnRpc3NhcnkgKFRlc3QgKSIsImN1c3RvbWVyU3RhdGUiOnsiaXNBdXRob3JpemVkIjp0cnVlLCJzbHVnIjp0cnVlLCJqb2JzUHJlc2VudCI6dHJ1ZSwidXNlck9wdGlvbnNQYWdlIjp0cnVlfSwidG9rZW5JZCI6IjQ5YTI2MTRlLWU4ODAtNDM0Ni1hMzlmLTkxNzRjMjE0NmI1YiIsInBsYW5JZCI6IjVlODJmYWJjZDVkZjU1YWQyMGJmODYzOSIsImlhdCI6MTY1NDc4MTkwNCwiZXhwIjoxNjYyNTU3OTA0fQ.RBny4Fj2XTXfWUCxAfXlSUNhTrTki_vDsySaIlQpghc"
    }}) .pipe(catchError(this.errorHandler))
  }
  getAppliedList(){
    return this._http.post<any>(this._url,{
        "stage": "shortlist",
        "status": "active",
        "applicationType": "all",
        "sortByDate": "updatedAt DESC"
    },{headers:{
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRsUm9sZXMiOlsiT1BTRSIsIk9QUyJdLCJhZG1pbiI6bnVsbCwiYXBwbHlBbGVydHNDcm1Kb2JJZCI6IiIsImJ1SXRlbUlkIjoiNjA4MDE4NGMxYmRiM2ZkOTBiMzM4YWM2IiwiY2FsZW5kZXJUb2tlbiI6W3sicmVmcmVzaF90b2tlbiI6IjEvLzBnTFNmRnF5aEpPbTlDZ1lJQVJBQUdCQVNOd0YtTDlJclkzVVNSbk1Ja2FKU040Q2hTQmZrWWl5NWE5NVAyZVdtV3p5WV9ITE5LSjV1Y3dsR3loYW9Hc1pqMHFUWTIyMVVLQTgiLCJleHBpcnkiOjE2NDQ5MDUzMzIwMDcsImNhbGVuZGVyVHlwZSI6Imdvb2dsZSIsImNsaWVudElkIjoiOTU4NjEyNDA4MDMwLWltYXNtaGFkaDg3dTYzNnQ1NDFnODRvMWc5dG1uYzU0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiY2xpZW50X3NlY3JldCI6IktrV3Z2VG84M1lVREs0anFqSU1hR0pBNiJ9XSwiY3JlYXRlZEF0IjoiMjAxOC0xMC0xNVQwODoyOToxOS45NDBaIiwiY3VzdG9tZXIiOiI1NjY5NWM2YWZmMDNmODdhNDcyMGNlYWQiLCJjdiI6IjgxMzcxMzIyNDI5LnBkZiIsImRlcGFydG1lbnQiOiI1YTI2ODNjZTVlMDYyZTM0NWY3YzMxMWEiLCJkZXNpZ25hdGlvbiI6bnVsbCwiZW1haWwiOiJyZWNydWl0ZXJAYXJ0aXNzYXJ5LmNvbSIsImVtYWlsX3ZlcmlmaWNhdGlvbiI6eyJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJlbWFpbEFwaVRva2VuIjpbeyJyZWZyZXNoVG9rZW4iOiIxLy8wZ2ViQ251b2Y5dkE5Q2dZSUFSQUFHQkFTTndGLUw5SXJtLWozNzlRazY3VDMzaENaSVBJUHAyaWlpd1lXRUFjOEFGV2hBblNnLUd1UHNOZnhKUUdxSTJLOFZFNDRYSVRSOWVFIiwiZXhwaXJ5IjoxNjAzOTc0MjE5Mjg3LCJ0eXBlIjoiZ21haWwifV0sImVtYWlsUHJlZmVyZW5jZXMiOnsiYXBwbHlBbGVydHMiOiJpbnN0YW50Iiwib3ZlcmR1ZVRhc2tzIjoibm8iLCJzdGF0dXNDaGFuZ2VBbGVydHMiOiJ5ZXMiLCJvbmJvYXJkaW5nTWFpbHMiOiJubyJ9LCJmaXJzdE5hbWUiOiJSZWNydWl0ZXIiLCJmdWxsTmFtZSI6IlJlY3J1aXRlciBBcnRpc3NhcnlUZXN0IiwiaGFzaGtleUNyZWF0ZWREYXRlIjoiMjAyMi0wNi0wOVQxMzoxMTozNS44MDhaIiwibGFzdE5hbWUiOiJBcnRpc3NhcnlUZXN0IiwibG9jYXRpb24iOiJNdW1iYWksIE1haGFyYXNodHJhLCBJbmRpYSIsIm1hbmFnZXJzIjpbIjU2ZDk3ZTJiODViMjk2MWQ0ZTEyNzZjMSIsIjU2Njk1YzZhZmYwM2Y4N2E0NzIwY2VhYyJdLCJtb2JpbGUiOiI3MDQ1NDU4MzIwIiwib3ZlcmR1ZVRhc2tzQ3JtSm9iSWQiOiIiLCJyZWNydWl0ZXJTZXJpZXNNYWlsc1NlbnQiOnRydWUsInJlZkluZm8iOnsia2FybWEiOjUwLCJjb2lucyI6NTAwMH0sInJvbGUiOiJyZWNydWl0ZXIiLCJzZW5kRW1haWxUb2tlbiI6W3sicmVmcmVzaFRva2VuIjoiMS8vMGdOaTkzSEM0LWxYYUNnWUlBUkFBR0JBU053Ri1MOUlyWGVfcWI2M1VkbUUwZXpPRHpNemtBS1Z6cjA1S3JJT1JCQVRUX2NoTElIcDR1aVQ5dXhjakZ2b3pJUkFhMGNyZXNMUSIsImV4cGlyeSI6MTY0MjE1MDQwMDgwMSwidHlwZSI6ImdtYWlsIn1dLCJzZXJpZXNNYWlsQ3JtSm9iSWQiOm51bGwsInNpdGVBZG1pbiI6dHJ1ZSwic3RhdHVzIjoiYWN0aXZlIiwic3VwZXJVc2VyIjp0cnVlLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTA5VDEzOjExOjUzLjM3M1oiLCJkYWlseVBhcnNpbmdQZXJSZWNydWl0ZXIiOjAsImJ1Zm9sbG93IjpbXSwic2x1ZyI6ImFydGlzc2FyeSIsImlkIjoiNWJjNDRmZGY1MmNhMjMxNzRkOWUxOThhIiwiY29tcGFueU5hbWUiOiJBcnRpc3NhcnkgKFRlc3QgKSIsImN1c3RvbWVyU3RhdGUiOnsiaXNBdXRob3JpemVkIjp0cnVlLCJzbHVnIjp0cnVlLCJqb2JzUHJlc2VudCI6dHJ1ZSwidXNlck9wdGlvbnNQYWdlIjp0cnVlfSwidG9rZW5JZCI6IjQ5YTI2MTRlLWU4ODAtNDM0Ni1hMzlmLTkxNzRjMjE0NmI1YiIsInBsYW5JZCI6IjVlODJmYWJjZDVkZjU1YWQyMGJmODYzOSIsImlhdCI6MTY1NDc4MTkwNCwiZXhwIjoxNjYyNTU3OTA0fQ.RBny4Fj2XTXfWUCxAfXlSUNhTrTki_vDsySaIlQpghc"
    }}) .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
