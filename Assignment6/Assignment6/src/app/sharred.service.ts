import {Workout} from './workout';
import {Exercise} from './exercise';
import {UserService} from './user.service';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    constructor(private user:UserService) {
    }
    public reloadDataEvent: Subject<boolean> = new Subject<boolean>();
}