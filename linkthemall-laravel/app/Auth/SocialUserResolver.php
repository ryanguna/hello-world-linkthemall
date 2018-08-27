<?php
/**
 * Created by IntelliJ IDEA.
 * User: jaypee
 * Date: 8/13/18
 * Time: 5:12 PM
 */

namespace App\Auth;


use App\Employee;
use App\User;
use Laravel\Socialite\Facades\Socialite;
use Adaojunior\Passport\SocialGrantException;
use Adaojunior\Passport\SocialUserResolverInterface;
use App\Http\Resources\SocialAccountResource;
use App\SocialAccount;


class SocialUserResolver implements SocialUserResolverInterface
{
    public function resolve($network, $token, $accessTokenSecret = null)
    {
        switch ($network) {
            case 'google':
                return $this->google($token, $network);
                break;
            default:
                throw SocialGrantException::invalidNetwork();
                break;
        }
    }
    public function google(string $token, $network)
    {
        $user = Socialite::driver('google')->userFromToken($token);



        if(!$exist = SocialAccount::where('provider',  $network)->where('provider_user_id', $user->getId())->first()){
            return $this->findOrCreate($user, $network);
        }

//        $resource = new SocialAccountResource(SocialAccount::where('provider', $network)->where('provider_user_id', $user->getId())->first());

        $resource = SocialAccount::where('provider', $network)->where('provider_user_id', $user->getId())->first();

        $userAccount = User::where('id', $resource->user_id)->get()->first();

        return $userAccount;


    }


    protected function findOrCreate($user, $network) : User
    {


        /** @var User $model */
        $employee = Employee::query()->firstOrCreate(['first_name' => $user->user['name']['givenName']], [
           'last_name' => $user->user['name']['familyName'],
            'gender' => isset($user->gender) ? ( $user->gender == 'male' ? 1 : 0 ) : 0
        ]);


        if($employee) {
            $userAccount = User::query()->firstOrCreate(['email' => $user->email], [
                'password' => bcrypt('secret'),
                'employee_id' => $employee->id,
                'profile_picture' => $user->avatar,
            ]);

            $socialAccount = SocialAccount::query()->firstOrCreate(['provider_user_id' => $user->getId(), 'provider' => $network], [
                'provider' => $network,
                'provider_user_id' => $user->getId(),
                'user_id' => $userAccount->id
            ]);

            return $userAccount;
        }
//        return response()->json($user);
    }
}
