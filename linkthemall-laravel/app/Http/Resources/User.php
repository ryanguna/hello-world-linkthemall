<?php

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;



class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->id,
            'email' => $this->email,
            'profile_picture' => $this->profile_picture,
            'is_active' => $this->is_active,
            'is_archived' => $this->is_archived,
            'employee' => $this->getEmployeeInformations()->get()->first()
        ];
    }


}
