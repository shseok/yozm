package com.example.demo.login.Controller;

import com.example.demo.common.Bean.CustomException;
import com.example.demo.common.Bean.ErrorCode;
import com.example.demo.login.Dto.MemberDto;
import com.example.demo.login.Service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MemberController {

    private final MemberService memberService;

    /**
     * 회원가입 API
     **/
    @PostMapping("/join")
    public boolean join(@Valid @RequestBody MemberDto memberDto) {
        try{
            memberService.userJoin(memberDto);
        }catch (Exception ex){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        return true;
    }

    /** 회원탈퇴 API
     * @return**/
    @PostMapping("/joinOut")
    public boolean joinOut(@Valid @RequestBody MemberDto memberDto) {
        try{
            memberService.userJoinOut(memberDto);
        }catch (Exception ex){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        return true;
    }

    /** 로그인 API
     * @return
     * **/
    @PostMapping("/login")
    public boolean login(@RequestBody MemberDto memberDto) {
        try{
            if(memberService.userLoginChk(memberDto.getUid()) == false){
                throw new CustomException(ErrorCode.USER_NOT_FOUND);
            }
            memberService.login(memberDto);
        }catch (Exception ex){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        return true;
    }
}
