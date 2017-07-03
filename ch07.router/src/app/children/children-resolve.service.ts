import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; import { Children, ChildrenService } from './children.service';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class ChildrenResolve implements Resolve<Children> {
    constructor(private cs: ChildrenService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Children> | Observable<Children> | Children {
        let id = +route.params['id'];
        return this.cs.findById(id).then(children => {
            if (children) {
                return children;
            } else {
                this.router.navigate(['/not-found']);
                return new EmptyObservable();
            }
        });
    }
}