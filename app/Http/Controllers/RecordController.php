<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;

class RecordController extends Controller
{
    //カレンダー表示
    public function show(){
        return view("calendars.calendar");
    }
}
