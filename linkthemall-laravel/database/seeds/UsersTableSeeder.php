<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        DB::table('users')->insert([
            'email' => 'admin@triune.com',
            'password' => bcrypt('admin')
        ]);
        DB::table('user_informations')->insert([
            'user_id' => 1,
            'firstname' => 'Admin',
            'lastname' => 'Lastname',
        ]);



    }
}
