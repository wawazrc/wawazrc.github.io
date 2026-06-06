<?php

use Illuminate\Support\Facades\Route;

$showMenu = function () {
    return view('welcome');
};

Route::get('/', $showMenu);
Route::get('/menu-happup', $showMenu);
Route::get('/menu-alkohol', $showMenu);

Route::fallback($showMenu);
