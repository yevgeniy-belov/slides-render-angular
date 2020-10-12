import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SlidesService {

    private slidesUrl = 'api/slides';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }

    updateSnapshots(node, force) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: { node: node, force: force },
        };
        return this.http.post(`${this.slidesUrl}/updateSnapshots`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }
    addSlide(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: node,
        };
        return this.http.post(`${this.slidesUrl}/blank`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }
    rename(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                path: node
            },
        };
        return this.http.post(`${this.slidesUrl}/rename`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }
    addFolder(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                path: node
            },
        };
        return this.http.post(`${this.slidesUrl}/addFolder`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }
    deleteFolder(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                path: node
            },
        };
        return this.http.post(`${this.slidesUrl}/deleteFolder`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }

    duplicate(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                node: node
            },
        };
        this.http.post(`${this.slidesUrl}/duplicate`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }

    editSlideTS(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                node: node
            },
        };
        this.http
            .post(`${this.slidesUrl}/editTS`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }
    editSlideHTML(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                node: node
            },
        };
        this.http
            .post(`${this.slidesUrl}/editHTML`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }

    deleteSlide(node) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                node: node
            },
        };
        this.http
            .post(`${this.slidesUrl}/delete`, options)
            .subscribe((s) => {
                console.log(s);
            });
    }

    reorderSlides(nodeInfo) {
        return this.http.post(`${this.slidesUrl}/reorder`, nodeInfo, this.httpOptions)
            .subscribe((s) => {
                console.log(s);
            });
    }
    moveSlides(nodeInfo) {
        return this.http.post(`${this.slidesUrl}/move`, nodeInfo, this.httpOptions)
            .subscribe((s) => {
                console.log(s);
            });
    }

    gitStatus() {
        return this.http.get(`${this.slidesUrl}/status`, this.httpOptions)
            .pipe(map((res) => {
                return console.log(res);
            }));
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
