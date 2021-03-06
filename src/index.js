import { run } from './app/app';
import {AlertService} from './app/alert.service';
import { ComponentService } from './app/component.service';

import './main.scss';

const aService = new AlertService();
const cService = new ComponentService();

run(aService, cService);