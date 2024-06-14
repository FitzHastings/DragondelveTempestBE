/* Copyright 2024 Prokhor Kalinin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @IsString()
    @Column({ unique: true, })
    public username: string;

    @Exclude()
    @Column()
    public password: string;

    @Column({ default: () => 'USER', })
    public role: string;

    @Exclude()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
    public createdAt: Date;

    @Exclude()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
    public updatedAt: Date;
}
